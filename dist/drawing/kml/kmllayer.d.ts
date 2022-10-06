/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/// <reference types="jest" />
/// <reference types="google.maps" />
import { MVCObject } from "../../maps/event/mvcobject";
export declare class KmlLayer extends MVCObject implements google.maps.KmlLayer {
    getDefaultViewport: jest.Mock<any, any>;
    getMap: jest.Mock<any, any>;
    getMetadata: jest.Mock<any, any>;
    getStatus: jest.Mock<any, any>;
    getUrl: jest.Mock<any, any>;
    getZIndex: jest.Mock<any, any>;
    setMap: jest.Mock<any, any>;
    setOptions: jest.Mock<any, any>;
    setUrl: jest.Mock<any, any>;
    setZIndex: jest.Mock<any, any>;
    addListener: jest.Mock<any, any>;
    constructor(opts?: google.maps.KmlLayerOptions | null);
}
