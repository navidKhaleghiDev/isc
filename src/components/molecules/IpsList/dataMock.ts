import { IIp, EIpType } from '@src/services/client/rules/types';

export const IpsListData: IIp[] = [
  {
    id: '1',
    ip_type: EIpType.EXTERNAL,
    ip: '192.186.34.10',
    created_at: '1402/03/10',
    updated_at: '1402/10/30',
  },
  {
    id: '2',
    ip_type: EIpType.EXTERNAL,
    ip: '192.186.122.30',
    created_at: '1402/23/10',
    updated_at: '1402/02/17',
  },
  {
    id: '3',
    ip_type: EIpType.EXTERNAL,
    ip: '192.186.23.52',
    created_at: '1402/11/25',
    updated_at: '1402/02/10',
  },
  {
    id: '4',
    ip_type: EIpType.EXTERNAL,
    ip: '192.186.53.50',
    created_at: '1402/21/19',
    updated_at: '1402/02/18',
  },
  {
    id: '5',
    ip_type: EIpType.EXTERNAL,
    ip: '192.186.200.47',
    created_at: '1402/14/15',
    updated_at: '1402/02/17',
  },
];
