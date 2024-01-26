import { PatientsRepository } from "../../repositories/PatientsRepository"
import { CreatePatientUseCase } from "./CreatePatientUseCase"
import { CreatePatientController } from "./createPatientController"

const patientsRepository = new PatientsRepository()
const createPatientUseCase = new CreatePatientUseCase(patientsRepository)
export const createPatientController = new CreatePatientController(createPatientUseCase)
