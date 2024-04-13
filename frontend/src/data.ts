//Source code generated by AppGPT (www.appgpt.tech)
let data: any = {
  defaultData: {
    users: [
      {
        userName: 'userName 1',
        department: 1,
        password: 'password 1',
        email: 'email 1',
        id: 32,
      },
      {
        userName: 'userName 2',
        department: 2,
        password: 'password 2',
        email: 'email 2',
        id: 29,
      },
      {
        userName: 'userName 3',
        department: 3,
        password: 'password 3',
        email: 'email 3',
        id: 80,
      },
      {
        userName: 'userName 4',
        department: 4,
        password: 'password 4',
        email: 'email 4',
        id: 35,
      },
      {
        userName: 'userName 5',
        department: 5,
        password: 'password 5',
        email: 'email 5',
        id: 87,
      },
    ],
    departments: [
      { departmentName: 'departmentName 1', departmentHead: 1, id: 33 },
      { departmentName: 'departmentName 2', departmentHead: 2, id: 27 },
      { departmentName: 'departmentName 3', departmentHead: 3, id: 80 },
      { departmentName: 'departmentName 4', departmentHead: 4, id: 29 },
      { departmentName: 'departmentName 5', departmentHead: 5, id: 74 },
    ],
    initiatives: [
      {
        name: 'name 1',
        description: 'description 1',
        startDate: '2024-06-07T00:35:14.984Z',
        endDate: '2024-03-15T16:52:25.897Z',
        relatedDepartment: 1,
        status: 'status 1',
        id: 32,
      },
      {
        name: 'name 2',
        description: 'description 2',
        startDate: '2024-11-24T09:23:31.167Z',
        endDate: '2024-10-26T15:59:07.720Z',
        relatedDepartment: 2,
        status: 'status 2',
        id: 20,
      },
      {
        name: 'name 3',
        description: 'description 3',
        startDate: '2024-01-12T20:21:27.131Z',
        endDate: '2024-03-09T00:12:28.931Z',
        relatedDepartment: 3,
        status: 'status 3',
        id: 25,
      },
      {
        name: 'name 4',
        description: 'description 4',
        startDate: '2025-04-12T17:26:09.185Z',
        endDate: '2023-09-21T01:03:28.460Z',
        relatedDepartment: 4,
        status: 'status 4',
        id: 54,
      },
      {
        name: 'name 5',
        description: 'description 5',
        startDate: '2024-02-26T12:44:53.982Z',
        endDate: '2024-07-28T02:11:25.388Z',
        relatedDepartment: 5,
        status: 'status 5',
        id: 15,
      },
    ],
    goals: [
      {
        name: 'name 1',
        description: 'description 1',
        targetDate: '2024-06-03T05:20:39.689Z',
        relatedDepartment: 1,
        status: 'status 1',
        id: 0,
      },
      {
        name: 'name 2',
        description: 'description 2',
        targetDate: '2024-01-23T20:03:40.519Z',
        relatedDepartment: 2,
        status: 'status 2',
        id: 46,
      },
      {
        name: 'name 3',
        description: 'description 3',
        targetDate: '2024-02-26T09:43:10.770Z',
        relatedDepartment: 3,
        status: 'status 3',
        id: 60,
      },
      {
        name: 'name 4',
        description: 'description 4',
        targetDate: '2024-11-21T02:29:16.095Z',
        relatedDepartment: 4,
        status: 'status 4',
        id: 59,
      },
      {
        name: 'name 5',
        description: 'description 5',
        targetDate: '2025-01-08T10:14:42.247Z',
        relatedDepartment: 5,
        status: 'status 5',
        id: 3,
      },
    ],
    emissionSources: [
      {
        sourceType: 'sourceType 1',
        quantityUsed: 0.61,
        emissionFactors: 0.48,
        totalEmissions: 0.41,
        id: 56,
      },
      {
        sourceType: 'sourceType 2',
        quantityUsed: 0.76,
        emissionFactors: 0.41,
        totalEmissions: 0.36,
        id: 52,
      },
      {
        sourceType: 'sourceType 3',
        quantityUsed: 0.06,
        emissionFactors: 0.29,
        totalEmissions: 0.95,
        id: 7,
      },
      {
        sourceType: 'sourceType 4',
        quantityUsed: 0.43,
        emissionFactors: 0.58,
        totalEmissions: 0.68,
        id: 21,
      },
      {
        sourceType: 'sourceType 5',
        quantityUsed: 0.7,
        emissionFactors: 0.34,
        totalEmissions: 0.76,
        id: 83,
      },
    ],
    resourceUsage: [
      {
        resourceType: 'resourceType 1',
        quantityConsumed: 0.53,
        unitOfMeasurement: 'unitOfMeasurement 1',
        periodOfConsumption: '2025-02-14T06:42:26.155Z',
        id: 41,
      },
      {
        resourceType: 'resourceType 2',
        quantityConsumed: 0.56,
        unitOfMeasurement: 'unitOfMeasurement 2',
        periodOfConsumption: '2023-06-15T15:31:01.226Z',
        id: 77,
      },
      {
        resourceType: 'resourceType 3',
        quantityConsumed: 0.34,
        unitOfMeasurement: 'unitOfMeasurement 3',
        periodOfConsumption: '2024-02-02T17:48:03.443Z',
        id: 65,
      },
      {
        resourceType: 'resourceType 4',
        quantityConsumed: 0.74,
        unitOfMeasurement: 'unitOfMeasurement 4',
        periodOfConsumption: '2024-05-30T19:01:31.709Z',
        id: 58,
      },
      {
        resourceType: 'resourceType 5',
        quantityConsumed: 0.12,
        unitOfMeasurement: 'unitOfMeasurement 5',
        periodOfConsumption: '2024-04-07T14:17:34.999Z',
        id: 29,
      },
    ],
  },
};
export default data;
