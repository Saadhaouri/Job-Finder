import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from "uuid";

interface IFormInput {
  id: string;
  firstname: string;
  lastname: string;
  dateofbirth: Date;
  country: string;
  region: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  acceptedConditions: boolean;
}

const loginSchema = yup.object().shape({
  id: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  dateofbirth: yup.date().required(),
  country: yup.string().required(),
  region: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  passwordConfirmation: yup
    .string()
    .label("confirm password")
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
  acceptedConditions: yup.bool().required(),
});

const RegisterPage = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
    defaultValues: { id: uuidv4() },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
    setCountry("");
    setRegion("");
  };

  // Set default value for 'id' field

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (val: string) => {
    setCountry(val);
    setValue("country", val);
  };

  const selectRegion = (val: string) => {
    setRegion(val);
    setValue("region", val);
  };

  return (
    <div className="2xl:container h-screen m-auto">
      <div hidden className="fixed inset-0 w-7/12 lg:block">
        <span className="absolute left-6 bottom-6 text-sm">
          <a href="https://www.pexels.com/" target="_blank" title="Pexels">
            Pexels
          </a>
        </span>
        <img
          className="w-full h-full object-cover"
          src="https://f.hubspotusercontent30.net/hubfs/8110437/Blog%20Content/cv-job-hunting-wide.jpg"
          alt=""
        />
      </div>
      <div
        hidden
        role="hidden"
        className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"
      ></div>
      <div className="relative h-full ml-auto lg:w-6/12">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="space-y-4">
            <div className="logoDiv">
              <Link to="/">
                <h1 className="logo text-[45px] text-blueColor">
                  <strong className="">Job</strong>Finder
                </h1>
              </Link>
            </div>

            <p className="font-medium text-lg text-gray-600">
              Create a new account
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit, (error) => {
              console.log(error);
            })}
            className="space-y-6 py-6"
          >
            <div className="flex grid-cols-2 gap-4">
              <div>
                <input
                  {...register("firstname")}
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
                <p className=" text-red-500">{errors.firstname?.message}</p>
              </div>

              <div>
                <input
                  {...register("lastname")}
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
                <p className=" text-red-500">{errors.lastname?.message}</p>
              </div>
            </div>

            <div>
              <input
                {...register("dateofbirth")}
                name="dateofbirth"
                type="date"
                placeholder="Date of Birth"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              <p className=" text-red-500">{errors.dateofbirth?.message}</p>
            </div>
            <div>
              <Controller
                control={control}
                name="country"
                render={({ field }) => (
                  <CountryDropdown
                    value={country}
                    onChange={(val) => {
                      selectCountry(val);
                      field.onChange(val);
                    }}
                    onBlur={field.onBlur}
                    className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  />
                )}
              />
              {/* <p className=" text-red-500"> {errors.country?.message}</p> */}
            </div>
            <div>
              <Controller
                control={control}
                name="region"
                render={({ field }) => (
                  <RegionDropdown
                    country={country}
                    value={region}
                    onChange={(val) => {
                      selectRegion(val);
                      field.onChange(val);
                    }}
                    onBlur={field.onBlur}
                    className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  />
                )}
              />
              <p className="text-red-500">{errors.region?.message}</p>

              {/* <p className=" text-red-500">{errors.region?.message}</p> */}
            </div>

            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              <p className=" text-red-500">{errors.email?.message}</p>
            </div>

            <div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              <p className=" text-red-500">{errors.password?.message}</p>
            </div>

            <div>
              <input
                {...register("passwordConfirmation")}
                type="password"
                placeholder="Confirm Password"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              <p className=" text-red-500">
                {errors.passwordConfirmation?.message}
              </p>
            </div>

            <div className="flex items-start">
              <input
                id="acceptTerms"
                {...register("acceptedConditions")}
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
              />
              <div className="ml-3 text-sm">
                <label
                  htmlFor="acceptTerms"
                  className="text-gray-300 dark:text-gray-900"
                >
                  I accept the terms and conditions
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-blueColor transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
              >
                <span className="font-semibold text-white text-lg">
                  Register
                </span>
              </button>
              <Link to="/login" className="w-max p-3 -ml-3">
                <span className="text-sm tracking-wide text-blue-600">
                  Already have an account? Login
                </span>
              </Link>
            </div>
          </form>
          <div className="border-t pt-12">
            <div className="space-y-2 text-center">
              <img src="" className="w-40 m-auto grayscale" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
