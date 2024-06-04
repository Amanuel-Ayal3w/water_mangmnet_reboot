class APIError extends Error {
  status: number = 500;
  data: string | object;

  constructor(status: number, data?: string | object) {
    super(typeof data === "string" ? data : JSON.stringify(data));
    this.status = status;
    this.data = data || "";
  }
}
export default APIError;
