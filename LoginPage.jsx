import { useState } from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import "./loginPage.css";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const LoginPage = () => {
  // destructuring formState errors
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: zodResolver(schema)});
  // console.log(errors);

  // const passwordRef = useRef(null);

  // const [user, setUser] = useState({
  //   name: "",
  //   phone: ""
  // })
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(user)
  // };

  const onSubmit = (FormData) => console.log(FormData);

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            {/* So this for attribute specify for which form element that label is bound. */}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form_text_input"
              placeholder="Enter your email address"
              // onChange={e => setUser({...user, name:e.target.value})}
              // value={user.name}
              {...register("email")}
            />
            {/* ?.=> optional changing */}
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              // type="password"
              type="password"
              // ref={passwordRef}
              id="password"
              className="form_text_input"
              placeholder="Enter your password number"
              // onChange={e => setUser({...user, phone: parseInt(e.target.value)})}
              // value={user.phone}
              {...register("password")}
            />
             {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
            {/* <button type="button" onClick={() => passwordRef.current.type = 'password'}>Hide password</button>
            <button type="button" onClick={() => passwordRef.current.type = 'text'}>Show password</button> */}
          </div>

          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
