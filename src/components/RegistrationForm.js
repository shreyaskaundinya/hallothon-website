import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { supabase } from "../../utils/supabaseClient";
import MemberRegistration from "./MemberRegistration";
import Timer from "./Timer";

let MAX_MEMBERS = 4;

function RegistrationForm() {
  const router = useRouter();
  const [teamDetails, setTeamDetails] = useState({
    team_name: "",
    solution_url: "",
    domain: "",
  });

  const [isRegOpen, setIsRegOpen] = useState(false);

  const [membersDetails, setMemberDetails] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitButton = useRef(null);

  const saveToLocalStorage = () => {
    console.log("SAVING TO LS", teamDetails);
    localStorage.setItem(
      "hallothon-saved-team-data",
      JSON.stringify(teamDetails)
    );
    localStorage.setItem(
      "hallothon-saved-member-data",
      JSON.stringify(membersDetails)
    );
  };

  useEffect(() => {
    const teamsData = localStorage.getItem("hallothon-saved-team-data");
    const membersData = localStorage.getItem("hallothon-saved-member-data");
    if (isSubmitting) {
      saveToLocalStorage();
      submitButton.current.style.backgroundColor = "black";
      submitButton.current.style.pointerEvents = "none";
    } else {
      submitButton.current.style.backgroundColor = "#3f3f46";
      submitButton.current.style.pointerEvents = "all";
    }
    if (teamsData) {
      setTeamDetails(() => JSON.parse(teamsData));
    }
    if (membersData) {
      setMemberDetails(() => JSON.parse(membersData));
    }

    return () => {};
  }, [isSubmitting]);

  const updateTeamDetails = useCallback(
    (e) => {
      console.log("UPDATING TEAM DEETS", e.target.value);
      setTeamDetails((prevDeets) => {
        return { ...prevDeets, [e.target.name]: e.target.value };
      });
    },
    [teamDetails]
  );

  const appendMember = useCallback(
    (e) => {
      e.preventDefault();
      setMemberDetails((prevMembers) => {
        if (prevMembers.length === MAX_MEMBERS) {
          return prevMembers;
        }
        return [
          ...prevMembers,
          {
            name: "",
            email: "",
            college_id: "",
            college: "",
            sem: "1",
            year: 0,
            branch: "CSE",
            phone: "",
            gender: "M",
            github: "",
            guardian_name: "",
            guardian_phone: "",
            is_hostellite: false,
            hostel_room_no: 0,
          },
        ];
      });
    },
    [membersDetails]
  );

  const updateMember = useCallback(
    (index, update) => {
      setMemberDetails((prevMembers) => {
        let x = [...prevMembers];
        x[index] = { ...x[index], ...update };
        return x;
      });
      // console.log(membersDetails[index]);
    },
    [membersDetails]
  );

  const removeMember = useCallback(
    (index) => {
      setMemberDetails((prevMembers) => {
        const x = [...prevMembers];
        x.splice(index, 1);
        return x;
      });
    },
    [membersDetails]
  );
  const validateData = useCallback(async (teamDetails, memberDetails) => {
    // console.log("in validate")
    setIsSubmitting(true);
    const { data, error } = await supabase.from("Team").select("team_name");
    if (error) {
      toast("Server Error", { type: "error" });
      setIsSubmitting(false);
    } else {
      let teamNames = data.map((x) => x.team_name);
      if (teamNames.includes(teamDetails.team_name)) {
        toast("Team name already exists", { type: "error" });
        setIsSubmitting(false);
        return false;
      }
      if (
        teamDetails.team_name === "" ||
        teamDetails.domain === "" ||
        teamDetails.solution_url === ""
      ) {
        console.log(teamDetails);
        toast("Please fill all the fields in the team details section", {
          type: "error",
          position: "top-right",
        });
        setIsSubmitting(false);
        return false;
      }

      if (!teamDetails.solution_url.match()) {
        toast(
          `Please share a google drive link to your solution presentation (make sure its public)`,
          { type: "error", position: "top-right" }
        );
        setIsSubmitting(false);
        return false;
      }

      if (memberDetails.length < 3 || memberDetails.length > 4) {
        toast("Team should have atleast 3 and atmost 4 members", {
          type: "error",
          position: "top-right",
        });
        setIsSubmitting(false);
        return false;
      }

      for (let i = 0; i < memberDetails.length; i++) {
        const member = memberDetails[i];
        if (
          member.name === "" ||
          member.email === "" ||
          member.college === "" ||
          member.college_id === "" ||
          member.phone === "" ||
          member.college === "" ||
          member.guardian_name === "" ||
          member.guardian_phone === ""
        ) {
          toast(
            `Please fill all the fields in the member details section for member ${
              i + 1
            }`,
            { type: "error", position: "top-right" }
          );
          setIsSubmitting(false);
          return false;
        }
        if (
          !member.email.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          )
        ) {
          toast("Please enter a valid email address", {
            type: "error",
            position: "top-right",
          });
          setIsSubmitting(false);
          return;
        }
        if (!member.phone.match(/^[0-9]{10}$/)) {
          toast("Please enter a valid phone number", {
            type: "error",
            position: "top-right",
          });
          setIsSubmitting(false);
          return;
        }
        if (!member.guardian_phone.match(/^[0-9]{10}$/)) {
          toast("Please enter a valid guardian phone number", {
            type: "error",
            position: "top-right",
          });
          setIsSubmitting(false);
          return;
        }
        // if (
        //     !member.srn.match(
        //         /^(pes|PES)[1-2](ug|UG)(19|2[0-2])..\d\d\d/
        //     )
        // ) {
        //     toast('Please enter a valid SRN', {
        //         type: 'error',
        //         position: 'top-right',
        //     });
        //     setIsSubmitting(false);
        //     return;
        // }
      }
      registerTeam(teamDetails, memberDetails);
    }
  });

  // const registerTeam = useCallback(async (teamDetails, memberDetails) => {
  //   const { data, error } = await supabase.from("Team").insert([teamDetails]);
  //   if (error) {
  //     toast("Server Error! Please try again later", {
  //       type: "error",
  //       position: "top-right",
  //     });
  //     setIsSubmitting(false);
  //   } else {
  //     let team = await supabase
  //       .from("Team")
  //       .select("id")
  //       .eq("team_name", teamDetails.team_name);
  //     let teamId = team.data[0].id;
  //     memberDetails.map(async (member) => {
  //       console.log(member);
  //       member.team_id = teamId;
  //       member.team_name = teamDetails.team_name;
  //       const { data1, error1 } = await supabase
  //         .from("Member")
  //         .insert([member]);

  //       let currMember = await supabase
  //         .from("Member")
  //         .select("id")
  //         .eq("college_id", member.college_id);
  //       let memberId = currMember.data[0].id;
  //       const { data2, error2 } = await supabase
  //         .from("MemberStatus")
  //         .insert([{ member_id: memberId }]);
  //       setIsSubmitting(false);
  //       if (error1 || error2) {
  //         toast("Error in registering team", {
  //           type: "error",
  //           position: "top-right",
  //         });
  //         setIsSubmitting(false);
  //       } else {
  //         toast("Team Registered Successfully", {
  //           type: "success",
  //           position: "bottom-right",
  //           toastId: "success",
  //         });
  //         setIsSubmitting(false);
  //         router.push("/success");
  //       }
  //     });
  //   }
  // });
  const registerTeam = useCallback(async (teamDetails, memberDetails) => {
    const { data, error } = await supabase.from("Team").insert([teamDetails]);

    if (error) {
      toast("Server Error! Please try again later", {
        type: "error",
        position: "top-right",
      });
      setIsSubmitting(false);
    } else {
      let team = await supabase
        .from("Team")
        .select("id")
        .eq("team_name", teamDetails.team_name);
      let teamId = team.data[0].id;

      let promises = [];

      memberDetails.forEach((member) => {
        promises.push(
          (async (member) => {
            {
              //console.log(member);
              member.team_id = teamId;
              member.team_name = teamDetails.team_name;
              try {
                const { data1, error1 } = await supabase
                  .from("Member")
                  .insert([member]);

                //console.log(member.name, data1, error1);

                if (error1) {
                  toast("Error in registering team", {
                    type: "error",
                    position: "top-right",
                  });
                  //console.log(error1);
                  throw new Error(error1);
                }

                let currMember = await supabase
                  .from("Member")
                  .select("id")
                  .eq("college_id", member.college_id);

                let memberId = currMember.data[0].id;

                const { data2, error2 } = await supabase
                  .from("MemberStatus")
                  .insert([{ member_id: memberId }]);

                //console.log(member.name, data2, error2);

                if (error2) {
                  toast("Error in registering team", {
                    type: "error",
                  });
                  //console.log(error2);
                  throw new Error(error2);
                }
                //console.log(member.name, 'SUCCESS');
              } catch (err) {
                throw err;
              }
            }
          })(member)
        );
      });

      Promise.all(promises)
        .then((values) => {
          //console.log(values);
          toast("Team Registered Successfully", {
            type: "success",
          });
          setIsSubmitting(false);
          localStorage.setItem("hallothon-has-submitted", "true");
          router.push("/success");
        })
        .catch((err) => {
          toast(
            "Error registering team! Please try again. [make sure to have filled all fields with valid entries]. Contact us if the registration keeps failing...",
            {
              type: "error",
            }
          );
        });
    }
  });
  return (
    <>
      <div className="text-center text-step-2 mx-5 my-2 font-bold">
        REGISTRATIONS ENDING IN :
      </div>
      <Timer setDone={setIsRegOpen} date={"2023/10/10 23:59:59"} />
      {!isRegOpen ? (
        <div className="registration__form max-w-5xl mx-auto my-20 p-4 md:p-2 font-agency">
          <div className="flex justify-between items-center border-b-2 border-white mb-16 pb-4">
            <h1 className="text-step-4 font-bold">Registration Form</h1>
            <div className="flex flex-row gap-2">
              <button className="btn" onClick={saveToLocalStorage}>
                Save Changes
              </button>
              {/* <button className="btn" onClick={appendMember}>
                Add Member +
              </button> */}
            </div>
          </div>
          <div className="border-2 rounded-lg pb-4">
            <div className="text-step-3 font-bold  text-center text-red-600">
              How to Register ?
            </div>
            <div className="p-4 sm:p-8 text-step-1">
              <p>- To Register Fill out details of all the team members.</p>
              <p>- A team can consist of 3-4 members.</p>
              <p>- Click on Save Changes to save the form as a draft.</p>
              <p>
                - After filling out the form recheck all the details as you
                won't be able to edit it later. After you are done, click on the
                Submit button, and that's it , your team is registered for
                Hallothon 2023!
              </p>
              {/* <p className='underline italic '>
                                - We will be selecting teams on the basis of the
                                solution given by you ,for the problem
                                statements given below. A totally diffrent
                                problem statement might be given to the selected
                                teams by us, prior to the event.{' '}
                            </p> */}
            </div>
          </div>
          <form className="flex flex-col gap-8 pt-5">
            <label htmlFor="team_name">
              Team Name
              <input
                required
                type="text"
                name="team_name"
                onChange={updateTeamDetails}
                value={teamDetails.team_name}
              />
            </label>

            <label htmlFor="domain" className="flex-1">
              Select your Track
              <select
                required
                name="domain"
                onChange={updateTeamDetails}
                value={teamDetails.domain}
              >
                <option value="" selected>
                  Select a Track
                </option>
                <option value="Web 3.0">Web 3.0</option>
                <option value="Ed tech">Ed Tech</option>
                <option value="Auto tech">Auto Tech</option>
              </select>
            </label>

            <div className="flex flex-col gap-4 p-4 sm:p-8 border border-white rounded-lg text-step--1">
              <span>
                Come up with a problem statement and explain your solution in
                detail for the same
              </span>
              <span>
                Please create a presentation that includes the problem statement
                and your proposed solution, following the provided{" "}
                <a
                  href="https://docs.google.com/presentation/d/1t0OuPRjIvm5IAMO9KTyhfguvYFXbzQ4C-1Zn8Sz6zeY/edit#slide=id.gd933c8c4a_0_32"
                  className="text-red-600 font-semibold"
                >
                  template
                </a>
                . After creating the presentation, upload it to Google Drive and
                share the link with us. Ensure that the document is set to
                'public' access.
              </span>
              <br></br>
            </div>

            <label htmlFor="solution_url">
              Share the link to your solution
              <input
                required
                type="text"
                name="solution_url"
                onChange={updateTeamDetails}
                value={teamDetails.solution_url}
              />
            </label>
            <button className="btn" onClick={appendMember}>
              Add Member +
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {membersDetails.map((mem, idx) => {
                return (
                  <MemberRegistration
                    key={idx}
                    member={mem}
                    updateMember={updateMember}
                    removeMember={removeMember}
                    index={idx}
                  />
                );
              })}
            </div>

            <button
              disabled={isSubmitting}
              ref={submitButton}
              className="btn my-2"
              onClick={(e) => {
                e.preventDefault();
                console.log(teamDetails, membersDetails);
                validateData(teamDetails, membersDetails);
              }}
            >
              {isSubmitting ? "Please Wait..." : "Submit"}
            </button>
          </form>
          <ToastContainer />
        </div>
      ) : (
        <></>
      )}{" "}
    </>
  );
}
export default RegistrationForm;
