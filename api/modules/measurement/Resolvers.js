import MeasurementService from "../../services/MeasurementService";

const resolvers = {
  Query: {
    measurements: (root, { user }) => {
      return MeasurementService.list(1);
    },
  },
  Mutation: {
    store: (root, { input }) => {
      return MeasurementService.store(input);
    },
    update: (root, { id, input }) => {
      return MeasurementService.update(id, input);
    },
    delete: (root, { id }) => {
      return MeasurementService.delete(id);
    },
  },
};

export default resolvers;
