import { IUser } from "../models/User"
import {makeAutoObservable} from 'mobx'
import UserService from "../services/UserService"
import CursService from "../services/CursService"

export default class UserStore {
    constructor() {
        this._curs= {}
        this._cursList = []
        makeAutoObservable(this)
    }

    setCurs(curs) {
        this._curs = curs
    }

    setCursList(curslist) {
        this._cursList = curslist
    }

    get curs() {
        return this._curs 
    }

    get cursList() {
        return this._cursList
    }

    async getAllCurs() {
        const response = await CursService.getAllCurs()
        this.setCursList(response.data)
        console.log(response)
    }

    async getOneById() {
        const response = await CursService.getOneById()
        this.setCurs(response.data)
        console.log(response)
    }
}