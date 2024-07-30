import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUp } from "@/actions/user.actions";

export function SignUp() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signUp(formData);
      }}
      className="card"
    >
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Button>Sign Up</Button>
    </form>
  );
}
