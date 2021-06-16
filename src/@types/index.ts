interface IPayload {
  ID?: string;
  req?: any;
  cb?: any;
  other?: any;
}

interface IAction {
  payload: IPayload;
}

export type { IPayload, IAction };
