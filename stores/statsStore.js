import { create } from "zustand";

const useStatsStore = create((set) => ({
  // Initial state
  stats: {
    width: [],
    height: [],
    streamBandwidth: [],
    decodedFrames: [],
    droppedFrames: [],
    corruptedFrames: [],
    estimatedBandwidth: [],
    gapsJumped: [],
    stallsDetected: [],
    completionPercent: [],
    loadLatency: [],
    manifestTimeSeconds: [],
    drmTimeSeconds: [],
    playTime: [],
    pauseTime: [],
    bufferingTime: [],
    licenseTime: [],
    liveLatency: [],
    maxSegmentDuration: [],
    manifestSizeBytes: [],
    bytesDownloaded: [],
    nonFatalErrorCount: [],
    manifestPeriodCount: [],
    manifestGapCount: [],
    switchHistory: [],
    stateHistory: [],
  },

  // Actions
  setStats: (newStats) =>
    set((state) => ({
      stats: {
        ...state.stats,
        ...Object.keys(newStats).reduce((acc, key) => {
          acc[key] = [...state.stats[key], newStats[key]];
          return acc;
        }, {}),
      },
    })),

  updateStat: (key, value) =>
    set((state) => ({
      stats: {
        ...state.stats,
        [key]: [...state.stats[key], value],
      },
    })),

  resetStats: () =>
    set(() => ({
      stats: {
        width: [],
        height: [],
        streamBandwidth: [],
        decodedFrames: [],
        droppedFrames: [],
        corruptedFrames: [],
        estimatedBandwidth: [],
        gapsJumped: [],
        stallsDetected: [],
        completionPercent: [],
        loadLatency: [],
        manifestTimeSeconds: [],
        drmTimeSeconds: [],
        playTime: [],
        pauseTime: [],
        bufferingTime: [],
        licenseTime: [],
        liveLatency: [],
        maxSegmentDuration: [],
        manifestSizeBytes: [],
        bytesDownloaded: [],
        nonFatalErrorCount: [],
        manifestPeriodCount: [],
        manifestGapCount: [],
        switchHistory: [],
        stateHistory: [],
      },
    })),
}));

export default useStatsStore;
