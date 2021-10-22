jest.mock("@chakra-ui/react", () => {
  // --> Original module
  const originalModule = jest.requireActual("@chakra-ui/react");

  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn().mockImplementation(() => ({
      isMobile: false,
    })),
  };
});
