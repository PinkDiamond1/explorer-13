/*
 *
 * Copyright (c) 2019-present for NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License ");
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
 *
 */

import http from './http'
import Constants from '../config/constants'
import * as symbol from 'symbol-sdk'

class NodeService {
    /**
     * Get Storage Info from symbol SDK
     * @returns {StorageInfo}
     */
    static getStorageInfo = async () => {
      const storageInfo = await http.node.getStorageInfo().toPromise()
      return storageInfo
    }

    /**
     * Get Node Info from symbol SDK
     * @returns {NodeInfo}
     */
    static getNodeInfo = async () => {
      const nodeInfo = await http.node.getNodeInfo().toPromise()
      return nodeInfo
    }

    /**
     * Get Server Info from symbol SDK
     * @returns {ServerInfo}
     */
    static getServerInfo = async () => {
      const serverInfo = await http.node.getServerInfo().toPromise()
      return serverInfo
    }

    /**
     * Get Node Peers from symbol SDK
     * @returns NodeInfo[]
     */
    static getNodePeers = async () => {
      const nodePeers = await http.node.getNodePeers().toPromise()

      const formattedNodePeers = nodePeers.map(nodeInfo => this.formatNodeInfo(nodeInfo))

      return formattedNodePeers
    }

    /**
     * Get node health status by endpoint.
     * @param string api-node endpoint such as http:localhost:3000
     * @returns boolean
     */
    static isNodeHealthStatus = async (currentUrl) => {
      let status = true

      try {
        await new symbol.NodeHttp(currentUrl).getNodeHealth().toPromise()
      } catch (e) {
        status = false
      }

      return status
    }

    /**
     * Format NodoInfoDTO to readable NodoInfo object
     * @param NodoInfoDTO
     * @returns Object readable NodeInfo object
     */
    static formatNodeInfo = nodeInfo => ({
      ...nodeInfo,
      address: symbol.Address.createFromPublicKey(nodeInfo.publicKey, nodeInfo.networkIdentifier).plain(),
      roles: Constants.RoleType[nodeInfo.roles],
      network: Constants.NetworkType[nodeInfo.networkIdentifier]
    })

    /**
     * Format Node Peers dataset into Vue Component
     * @returns Node peers object for Vue component
     */
    static viewNodePeers = async () => {
      let nodePeers = await this.getNodePeers()

      return nodePeers.map((el, index) => ({
        index: index + 1,
        version: el.version,
        roles: el.roles,
        network: el.network,
        host: el.host,
        port: el.port,
        address: el.address,
        friendlyName: el.friendlyName
      }))
    }
}

export default NodeService
