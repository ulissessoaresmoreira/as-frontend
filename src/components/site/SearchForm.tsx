"use client";

import { escapePhone } from "@/utils/scapePhone";
import { useState } from "react";

type Props = {
  onSearchButton: (phone: string) => void;
  loading: boolean
};

export const SearchForm = ({onSearchButton, loading}: Props) => {
  const [phoneInput, setPhoneInput] = useState("");
  return (
    <div>
      <p className="mb-3 text-xl">Digite seu número de telemóvel</p>
      <input
        type="text"
        inputMode="numeric"
        placeholder="Número de telemóvel"
        className="w-full p-3 bg-white text-black text-center text-4xl outiline-none rounded-lg disabled:opacity-20"
        autoFocus
        value={phoneInput}
        onChange={(e) => setPhoneInput(escapePhone(e.target.value))}
        disabled={loading}
      />
      <button 
        className="w-full p-3 mt-3 rounded-lg bg-blue-800 text-white text-4xl border-b-4 border-blue-600 active:border-0 disabled:opacity-20"
        onClick={() => onSearchButton(phoneInput)}
        disabled={loading}
      >
        {loading ? "A processar..." : "Aceder"}
      </button>
    </div>
  );
}