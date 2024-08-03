import { ISchedulesRepository } from "../../repositories/ISchedulesRepository"

export class ReadSchedulesUseCase {
  constructor(private schedulesRepository: ISchedulesRepository) {}

  execute() {
    const patients = this.schedulesRepository.read()
    return patients
  }
}
