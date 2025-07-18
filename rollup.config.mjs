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

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.mjs',
    output: {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: true,
    },
    external: [
        '@actions/core',
        '@actions/github'
    ],
    plugins: [
        resolve({ preferBuiltins: true }),
        commonjs(),
    ],
    preserveEntrySignatures: 'strict',
    onwarn: (warning, warn) => {
        if (warning.code === 'CIRCULAR_DEPENDENCY') {
            if (
                warning.importer.includes('@actions/core') ||
                warning.importer.includes('@actions/github')
            ) {
                // Suppress known safe circular warnings
                return;
            }
        }
        warn(warning);
    },
};
