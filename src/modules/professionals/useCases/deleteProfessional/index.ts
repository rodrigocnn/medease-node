import { ProfessionalsRepositoryPrima } from "../../repositories/ProfessionalsRepositoryPrima"
import { DeleteProfessionalController } from "./DeleteProfessionalController"

import { DeleteProfessionalUseCase } from "./DeleteProfessionalUseCase"

const professionalRepository = new ProfessionalsRepositoryPrima()
const deleteProfessionalUseCase = new DeleteProfessionalUseCase(professionalRepository)
export const deleteProfessionalController = new DeleteProfessionalController(deleteProfessionalUseCase)
