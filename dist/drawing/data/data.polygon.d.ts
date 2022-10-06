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
/// <reference types="google.maps" />
/// <reference types="jest" />
import { MVCObject } from "../../maps/event/mvcobject";
export declare class DataPolygon extends MVCObject implements google.maps.Data.Polygon {
    constructor(elements?: google.maps.MVCArray<google.maps.MVCArray<google.maps.LatLng>> | google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLng[][] | google.maps.LatLngLiteral[][] | google.maps.LatLng[] | google.maps.LatLngLiteral[]);
    forEachLatLng: jest.Mock<any, any>;
    getArray: jest.Mock<any, any>;
    getAt: jest.Mock<any, any>;
    getLength: jest.Mock<any, any>;
    getType: jest.Mock<any, any>;
}
