import { IUser } from "../models/User"
import {makeAutoObservable} from 'mobx'
import UserService from "../services/UserService"

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = new IUser()
        makeAutoObservable(this)
    }

    setUserName(username) {
        this._user.username = username
    }

    setEmail(email) {
        this._user.email = email
    }

    setName(name) {
        this._user.name = name
    }

    setPassword(password1) {
        this._user.password1 = password1
        this._user.password2 = password1
    }

    setAll(username, email, name) {
        this._user.username = username
        this._user.email = email
        this._user.name = name
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth 
    }

    get user() {
        return this._user
    }

    async registCreate(username, name, email, password1, password2) {
        const response = await UserService.RegistCreate(username, name, email, password1, password2)
        this.setIsAuth(true)
        console.log(response)
        this.setUser(response.data)
        console.log(this.user)
    }

    async customUserDetail() {
        const response = await UserService.CustomUserDetail()
        this.setIsAuth(true)
        console.log(response)
        this.setUser(response.data)
        console.log(this.user)
    }
}