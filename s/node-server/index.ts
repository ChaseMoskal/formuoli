
import * as express from "express"
import {Router, Express} from "express"

export interface FormuoliSubmission {}

export type FormuoliPlugin = (submission: FormuoliSubmission) => Promise<void>

export interface FormuoliOptions {
  plugins: FormuoliPlugin[]
  routePath?: string
}

export default class Formuoli {
  readonly router: Router

  constructor(options: FormuoliOptions) {
    const {plugins, routePath = "/formuoli"} = options
    const router = Router()
    router.post("/formuoli", async (request, response) => {

      // TODO actually obtain the submission data
      const submission = {}
  
      return Promise.all(plugins.map(plugin => plugin(submission)))
    })
    this.router = router
  }
}
