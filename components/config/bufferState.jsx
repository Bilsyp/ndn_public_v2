"use client";

import { useState, useEffect } from "react";
import { Input } from "../ui/input";
import useBufferStore from "@/stores/bufferStore";
import { Label } from "../ui/label";
import { Slider } from "@/components/ui/slider";
import { BookAudio } from "lucide-react";

const BufferState = () => {
  const { bufferSize, setBufferSize } = useBufferStore();

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium flex items-center gap-2">
        <BookAudio className="w-4 h-4" />
        Buffer Size
      </label>
      <Slider
        defaultValue={[bufferSize]}
        max={99}
        min={1}
        step={1}
        onValueChange={setBufferSize}
      />
      <span className="text-xs text-muted-foreground">
        Atur ukuran buffer (1-99 sec)
      </span>
      <p>Value BufferSize: {bufferSize}</p>
    </div>
  );
};

export default BufferState;
