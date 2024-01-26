import { PatientsRepositoryPrima } from "../../repositories/PatientsRepositoryPrima"
import { CreatePatientUseCase } from "./CreatePatientUseCase"
import { CreatePatientController } from "./createPatientController"

const patientsRepository = new PatientsRepositoryPrima()
const createPatientUseCase = new CreatePatientUseCase(patientsRepository)
export const createPatientController = new CreatePatientController(createPatientUseCase)
