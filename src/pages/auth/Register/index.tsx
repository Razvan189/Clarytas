import { Box, Button, Typography } from "@mui/material";
import { CheckboxInput, FormInput, PageMetaData, PasswordInput } from "@src/components";
import { Link } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import useLogin from "@src/pages/auth/Login/useLogin.ts";

/**
 * Bottom Links goes here
 */
const BottomLink = () => {
  return (
    <Box sx={{ my: "16px", display: "flex", justifyContent: "center" }}>
      <Typography variant="body2" color={"text.secondary"} sx={{ display: "flex", flexWrap: "nowrap", gap: 0.5 }}>
        Already have account?
        <Link to="/auth/login">
          <Typography variant="subtitle2" component={"span"}>
            Log In
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};

const Register = () => {
  const { loading, login, control } = useLogin();

  return (
    <>
      <PageMetaData title={"Register"} />

      <AuthLayout
        authTitle="Free Register"
        helpText="Don't have an account? Create your account, it takes less than a minute."
        bottomLinks={<BottomLink />}>
        <form onSubmit={login}>
          <FormInput name="email" type="email" label="Email Address" containerSx={{ mt: 2 }} control={control} />

          <PasswordInput name="password" type="password" label={"Password"} containerSx={{ mt: 2 }} control={control} />

          <CheckboxInput name="rememberMe" label="Remember me" control={control} labelSx={{ mt: 1 }} />

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button variant="contained" color="primary" disable={loading} type="submit" size={"large"}>
              Login
            </Button>
          </Box>
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
