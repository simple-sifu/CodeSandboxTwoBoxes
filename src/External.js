class External {
  constructor() {
    this.left = 0;
    this.right = 0;
    this.finalCall = null;
  }

  registerFinalCall = (finalCall) => {
    this.finalCall = finalCall;
  };

  doFinalCall = () => {
    this.finalCall(Number(this.left) + Number(this.right));
  };
}

export const external = new External();
