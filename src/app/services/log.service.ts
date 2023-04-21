import { Injectable } from "@angular/core"

@Injectable()
export class LogService {
    error(message: string) {
        console.log('ERROR ' + message)
    }

    info(message: string) {
        console.log('INFO ' + message)
    }

    verbose(message: string) {
        console.log('VERBOSE ' + message)
    }
}