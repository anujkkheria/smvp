export interface User {
  id: string
  email: string
  name: string
  token: string
}
export interface ILoginOptions {
  email: string
  password: string
}
export interface ISignupoptions {
  name: ''
  email: string
  password: string
  confirmPassword: string
  role: string
}
export interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  login: (loginOptions: ILoginOptions) => Promise<void>
  logout: () => Promise<void>
  signup: (signupOptions: ISignupoptions) => Promise<void>
}

export interface IForgotPass {
  email: string
  newpassword: string
}
