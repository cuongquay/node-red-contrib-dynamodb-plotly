/**
 * Copyright 2014 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
	"use strict";
	var path = require('path');		

	function plotlyStreamingNodeOut(n) {
		RED.nodes.createNode(this, n);
		var self = this;
		var options = {
			
		};
		self.on("input", function(msg) {
			if (self.options) {
				self.status({
					fill : "blue",
					shape : "ring",
					text : "sending..."
				});
			} else {
				self.error("plotly-streaming is not configured");
				self.status({
					fill : "red",
					shape : "ring",
					text : "not configured"
				});
			}
		});
	}

	RED.nodes.registerType("plotly-streaming", plotlyStreamingNodeOut);	
};
