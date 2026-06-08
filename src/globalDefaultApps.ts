// 全局规则黑名单
// 在一些非系统应用中禁用所有全局规则
export const blackListAppIDs: string[] = [
  // 填写不需要全局规则的 App 包名
];

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  // 填写不需要开屏广告规则的 App 包名
]);

// 更新提示黑名单
export const updateBlackListAppIDs = new Set([
  ...blackListAppIDs,
  // 填写不需要更新提示规则的 App 包名
]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  // 填写不需要青少年模式规则的 App 包名
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [
  // ★ 在这里填写你需要启用所有全局规则的 App 包名 ★
  // 例如：
  'com.ximalaya.ting.android',
  // 'com.example.app2',
];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  // 填写只需要开屏广告规则的 App 包名
]);

// 更新提示白名单
export const updateWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  // 填写只需要更新提示规则的 App 包名
]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  // 填写只需要青少年模式规则的 App 包名
]);
