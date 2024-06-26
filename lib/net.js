/*!
 * chai-http - request helper
 * Copyright(c) 2011-2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * net.isIP shim for browsers
 */
import isIP from 'is-ip';

exports.isIP = isIP;
exports.isIPv4 = isIP.isIPv4;
exports.isIPv6 = isIP.isIPv6;
