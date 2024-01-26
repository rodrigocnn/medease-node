import { Patient } from "../model/Patient"
import { ICreatePatientDTO, IPatientsRepository } from "./IPatientsRepository"

export class PatientsRepository implements IPatientsRepository {
  private patients: Patient[]

  constructor() {
    this.patients = []
  }

  create(patient: ICreatePatientDTO) {
    this.patients.push(patient)
  }
}
