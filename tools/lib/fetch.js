/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import https from 'https';

export default async (url) => new Promise((resolve, reject) =>
    https.get(url, res => resolve(res)).on('error', err => reject(err))
);
