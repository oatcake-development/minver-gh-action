/*
 * Copyright 2025 Lee Williams
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

import * as core from "@actions/core";
import * as github from "@actions/github";


export default function () {
    try {
        // `who-to-greet` input defined in action metadata file
        const nameToGreet = core.getInput("who-to-greet");
        core.setOutput("person", nameToGreet);

        // Get the current time and set it as an output variable
        const time = new Date().toTimeString();
        core.setOutput("time", time);

        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2);
        core.info(`The event payload: ${payload}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}