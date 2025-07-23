import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { registerUser } from "@/services/apiBlog"
import SmallSpinner from "@/ui_components/SmallSpinner"
import Spinner from "@/ui_components/Spinner"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"


const SignUpPage = () => {

    const{register, handleSubmit, formState, reset, watch} = useForm()
    const { errors } = formState

     const password = watch("password") 

    

  const mutation = useMutation({
    mutationFn: (data) => registerUser(data),
    onSuccess: () => {
      toast.success("You have successfully created an account!!!"),
      reset()
    },
    onError: (error) => {
      toast.error(error.message)
  }
  })

   function onSubmit(data){
        mutation.mutate(data)
     }

   return (
    <form className="h-[90%] overflow-auto md:px-16 
    px-8 py-6 flex flex-col mx-auto my-9 items-center gap-4 w-fit 
    rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]"
     onSubmit={handleSubmit(onSubmit)}
    >

      <div className="flex flex-col gap-2 justify-center items-center mb-2">

            <h3 className="font-semibold text-2xl"> Signup Form</h3>
            <p>Create your account to get started</p>

      </div>

      <div>
        <Label htmlFor="username" className="dark:text-[97989F]">Username</Label>
        <Input
          type="text"
          id="username"
          placeholder="Enter username"
          {...register("username", {required: "Username is required", 
            minLength: {value: 3, message: "Username must be at least 3 characters"}})}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
      {errors?.username?.message && <small className="text-red-700">{errors.username.message}</small>}
      </div>

      <div>
        <Label htmlFor="first_name">First Name</Label>
        <Input
          type="text"
          id="first_name"
          placeholder="Enter first name"
          {...register("first_name", {required: "FirstName is required",
             minLength: {value: 3, message:"FirstName must be at least 3 characters" }})}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.first_name?.message && <small className="text-red-700">{errors.first_name.message}</small>}
        
      </div>

      <div>
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          type="text"
          id="last_name"
          placeholder="Enter last name"
          {...register("last_name", {required: "LastName is required", 
            minLength:{value: 3, message:"LastName must be at least 3 characters" },
            })}
         
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
          
        />
        {errors?.last_name?.message && <small className="text-red-700">{errors.last_name.message}</small>}
       
      </div>
       <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password", {required: "Password is required",
             minLength: {value: 3, 
                message:"Password should be atleats 8 characters"}})}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.password?.message && <small className="text-red-700">{errors.password.message}</small>}
        
      </div>

     <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          {...register("confirmPassword", 
            {required: "password is required", 
            minLength: {value: 8,
             message: "Password should be atleats 8 characters"},
            validate:(value) => value === password || "Passwords do not match"
            })}
         
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.confirmPassword?.message && <small className="text-red-700">{errors.confirmPassword.message}</small>}
      </div>

     <div>
        <Label htmlFor="job_title" className="dark:text-[97989F]">
          Job Title
        </Label>
        <Input
          type="text"
          id="job_title"
          placeholder="Enter Job Title"
         
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        
      </div>


     <div>
        <Label htmlFor="content">Bio</Label>
        <Textarea
          id="content"
          placeholder="Tell us more about you"
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[180px]  w-[300px] text-justify"
        />
       
      </div>

       <div className="w-full">
        <Label htmlFor="profile_picture">Profile Picture</Label>
        <Input
          type="file"
          id="picture"
          
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-full max-sm:w-[300px] max-sm:text-[14px]"
        />

       
      </div>


    

      <div className="w-full flex items-center justify-center flex-col my-4">
         
          <button className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2">
              {mutation.isPending ?( <> <SmallSpinner/>{" "} <small className="text-[16px]">Creating user...</small> </>)
              : (<small className="text-[16px]">Signup</small>) }
              
          </button>
       
        
        <p className="text-[14px]">
          Already have an account? Sign In
          {/* Already have an account? <Link to="/signin">Sign In</Link> */}

        </p>

      </div>

    </form>
  )
}

export default SignUpPage