import { PatientsRepositoryPrima } from "../../repositories/PatientsRepositoryPrima"
import { DeletePatientController } from "./DeletePatientController"
import { DeletePatientUseCase } from "./DeletePatientUseCase"

const patientsRepository = new PatientsRepositoryPrima()
const deletePatientUseCase = new DeletePatientUseCase(patientsRepository)
export const deletePatientController = new DeletePatientController(deletePatientUseCase)
