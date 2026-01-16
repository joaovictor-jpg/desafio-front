"use client";

import React, { useState, useRef } from "react";
import { GenericCard } from "@/component/GenericCard";
import {
  Mail,
  Upload,
  FileText,
  X,
  Sparkles,
  CheckCircle,
  Loader2,
} from "lucide-react";

export function AnalysisForm() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const [activeTab, setActiveTab] = useState<"email" | "file">("email");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    const validTypes = ["text/plain", "application/pdf"];
    if (validTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      alert("Por favor, envie apenas arquivos .txt ou .pdf");
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setResult(null);
  };

  const handleAnalyze = async () => {
    let contentToSend = "";
    setResult(null);

    if (activeTab === "email") {
      if (!email.trim()) {
        alert("Por favor, insira o conteúdo do email.");
        return;
      }
      contentToSend = email;
    } else {
      if (!file) {
        alert("Por favor, selecione um arquivo.");
        return;
      }
      try {
        if (file.type === "text/plain") {
          contentToSend = await file.text();
        } else {
          alert(
            "Nesta versão, a leitura automática funciona apenas para .txt. Para PDF, seria necessário um parser extra.",
          );
          return;
        }
      } catch (error) {
        alert("Erro ao ler o arquivo.");
        return;
      }
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_content: contentToSend,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro na requisição");
      }

      setResult(data);
    } catch (error) {
      console.error(error);
      alert(
        "Não foi possível conectar ao servidor. Verifique se o backend está rodando.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GenericCard
      title="Nova Análise"
      icon={Sparkles}
      iconStyle="bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
      className="w-full"
    >
      <div className="flex flex-col gap-6">
        <div className="flex p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg self-start">
          <button
            onClick={() => setActiveTab("email")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "email"
                ? "bg-white dark:bg-zinc-700 shadow-sm text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            <Mail size={16} /> Via Email
          </button>
          <button
            onClick={() => setActiveTab("file")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "file"
                ? "bg-white dark:bg-zinc-700 shadow-sm text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            <Upload size={16} /> Via Arquivo
          </button>
        </div>

        <div className="min-h-[160px]">
          {activeTab === "email" ? (
            <div className="animate-in fade-in slide-in-from-left-4 duration-300">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Cole o conteúdo ou o cabeçalho do email
              </label>
              <textarea
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: Assunto: Proposta Comercial..."
                className="w-full h-32 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 focus:ring-2 focus:ring-indigo-500 outline-none resize-none text-sm"
              />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              {!file ? (
                <div
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl h-32 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    isDragging
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                      : "border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept=".txt,.pdf"
                    onChange={handleFileChange}
                  />
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-2 text-zinc-500">
                    <Upload size={20} />
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                    Clique para upload ou arraste
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                    Suporta .TXT ou .PDF
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-800 rounded-lg text-indigo-600 dark:text-indigo-300">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate max-w-[200px]">
                        {file.name}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={clearFile}
                    className="p-2 hover:bg-white dark:hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {result && (
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 animate-in fade-in zoom-in duration-300">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Resultado da Análise:
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Categoria:</span>{" "}
                {result.category}
              </p>
              <p>
                <span className="font-medium">Confiança:</span>{" "}
                {(result.confidence * 100).toFixed(1)}%
              </p>
              {result.suggested_response && (
                <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                  <p className="font-medium mb-1 text-xs text-gray-500 uppercase">
                    Sugestão de Resposta:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {result.suggested_response}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
          <button
            onClick={handleAnalyze}
            disabled={isLoading}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <CheckCircle size={16} />
            )}
            {isLoading ? "Analisando..." : "Iniciar Análise"}
          </button>
        </div>
      </div>
    </GenericCard>
  );
}
