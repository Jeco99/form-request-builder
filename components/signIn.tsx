import { Container } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

interface IFormInput {
  emailAddress: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <label htmlFor="">Email Address</label>
        <input
          {...register("emailAddress", { required: true, maxLength: 20 })}
        />
        <label htmlFor="">Password</label>
        <input {...register("password", { pattern: /^[A-Za-z]+$/i })} />
        <input type="submit" value={"Log In"} />
        <Link href={"/signup"}>
          <input type="submit" value={"Sign Up"} />
        </Link>
      </Container>
    </form>
  );
}
