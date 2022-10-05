import { ModuleService } from "..";

const moduleService = ModuleService('/');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getOpenDueData() {
    return moduleService({
      method: "GET",
      url: 'all-orders',
    });
  },

  getWeeklyDueOrders() {
    return moduleService({
      method: "GET",
      url: 'week-due-orders',
    });
  },

  getPiecesStatus() {
    return moduleService({
      method: "GET",
      url: 'pieces-status',
    });
  },

  getEstimatedBuild() {
    return moduleService({
      method: "GET",
      url: 'estimated-builds',
    });
  },

}
