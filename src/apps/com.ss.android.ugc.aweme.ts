import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: '.search.activity.SearchResultActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/202942ce-259c-4b9d-b3b3-06afbac8145f',
          snapshotUrls: 'https://i.gkd.li/i/13216121',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17811608',
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          excludeActivityIds: '.setting.ui.SettingCommonProtocolActivity',
          matches: [
            '[text*="青少年" || text*="未成年"][text*="模式"]',
            '[text="关闭" || text="不再提醒"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14321107',
            'https://i.gkd.li/i/14473006',
            'https://i.gkd.li/i/17726070',
            'https://i.gkd.li/i/18638030',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14917848',
            'https://i.gkd.li/i/17610958',
          ],
        },
      ],
    },
  ],
});
