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
import { LatLng, LatLngBounds } from "./maps/coordinates/latlng";
import { Circle } from "./drawing/polygons/circle";
import { Data } from "./drawing/data/data";
import { DataPolygon } from "./drawing/data/data.polygon";
import { Feature } from "./drawing/data/data.feature";
import { MVCArray } from "./maps/event/mvcarray";
import { MVCObject } from "./maps/event/mvcobject";
import { MapCanvasProjection } from "./drawing/DOM/mapcanvasprojection";
import { MapPanes } from "./drawing/DOM/mappanes";
import { Map_ } from "./maps/maps/map";
import { Marker } from "./drawing/marker/marker";
import { OverlayView } from "./drawing/DOM/overlayview";
import { KmlLayer } from "./drawing/kml/kmllayer";
import { Point } from "./maps/coordinates/point";
import { Polygon } from "./drawing/polygons/polygon";
import { Polyline } from "./drawing/polygons/polyline";
import { Size } from "./maps/coordinates/size";
import { VisibleRegion } from "./maps/maps/visibleregion";
import { StreetViewCoverageLayer } from "./street-view/rendering/coverage";
import { StreetViewPanorama } from "./street-view/rendering/panorama";
import { StreetViewService } from "./street-view/service/service";
import { InfoWindow_ } from "./maps/infowindow/infowindow";
import { event } from "./maps/event/event";
import { mockInstances } from "./registry";
declare const initialize: () => void;
export { Circle, Data, DataPolygon, event, Feature, LatLng, LatLngBounds, MVCArray, MVCObject, MapCanvasProjection, MapPanes, Map_ as Map, Marker, OverlayView, KmlLayer, Point, Polygon, Polyline, Size, StreetViewCoverageLayer, StreetViewPanorama, StreetViewService, VisibleRegion, InfoWindow_ as InfoWindow, mockInstances, initialize, };
