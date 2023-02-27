import { ConfigMap } from 'config'

export const configs: ConfigMap = {
  mysql: {
    host: ['127.0.0.1'],
    user: 'root',
    password: 'oms-local',
    database: 'ts_test',
    key: 'mysql',
    modelPath: 'user',
  },
}
