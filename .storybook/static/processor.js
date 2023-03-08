// processor.js
export class WorkletProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // Do something with the data, e.g. convert it to WAV
    return true;
  }
}

registerProcessor('worklet-processor', WorkletProcessor);
