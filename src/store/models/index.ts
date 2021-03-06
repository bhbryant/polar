import { connectRouter, RouterState } from 'connected-react-router';
import { reducer, Reducer } from 'easy-peasy';
import { History } from 'history';
import { AnyAction } from 'redux';
import appModel, { AppModel } from './app';
import bitcoindModel, { BitcoindModel } from './bitcoind';
import designerModel, { DesignerModel } from './designer';
import lightningModel, { LightningModel } from './lightning';
import modalsModel, { ModalsModel } from './modals';
import networkModel, { NetworkModel } from './network';

export interface RootModel {
  router: Reducer<RouterState, AnyAction>;
  app: AppModel;
  network: NetworkModel;
  bitcoind: BitcoindModel;
  lightning: LightningModel;
  designer: DesignerModel;
  modals: ModalsModel;
}

export const createModel = (history: History<any>): RootModel => {
  const rootModel: RootModel = {
    router: reducer(connectRouter(history) as any),
    app: appModel,
    network: networkModel,
    bitcoind: bitcoindModel,
    lightning: lightningModel,
    designer: designerModel,
    modals: modalsModel,
  };
  return rootModel;
};
