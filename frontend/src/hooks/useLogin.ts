import authenticationService from "../services/authentication";

export default function useLogin() {
	return authenticationService.login;
}
