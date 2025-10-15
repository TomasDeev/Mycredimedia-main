import React, { useState, useRef } from 'react';
import { Upload, File, CheckCircle, AlertCircle, Loader, Send, User, Mail, Phone, Briefcase } from 'lucide-react';

const Careers = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: ''
  });
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (selectedFile: File) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Por favor, sube un archivo PDF o Word.');
      return;
    }
    
    if (selectedFile.size > maxSize) {
      setError('El archivo no debe superar los 5MB.');
      return;
    }
    
    setFile(selectedFile);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('Por favor, sube tu currículum.');
      return;
    }
    
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Por favor, completa todos los campos requeridos.');
      return;
    }
    
    setUploading(true);
    
    // Simular upload - en producción esto se conectaría a un servicio real
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFile(null);
        setUploaded(false);
        setFormData({ name: '', email: '', phone: '', position: '' });
      }, 3000);
    }, 2000);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#21201f] mb-4">
            Únete a Nuestro Equipo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En MyCredimedia estamos buscando talento apasionado. Envía tu currículum y forma parte de nuestra historia de éxito.
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#21201f] flex items-center">
                <User className="mr-3 h-6 w-6 text-[#f9ad03]" />
                Información Personal
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#21201f] mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f9ad03] focus:outline-none transition-colors"
                    placeholder="Juan Pérez García"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#21201f] mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f9ad03] focus:outline-none transition-colors"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#21201f] mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f9ad03] focus:outline-none transition-colors"
                    placeholder="809-555-0123"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#21201f] mb-2">
                    Puesto de Interés
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#f9ad03] focus:outline-none transition-colors"
                    placeholder="Ej: Asesor Financiero"
                  />
                </div>
              </div>
            </div>

            {/* File Upload Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#21201f] flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-[#f9ad03]" />
                Currículum Vitae
              </h2>
              
              <div
                className={`relative border-4 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                  isDragging
                    ? 'border-[#f9ad03] bg-[#f9ad03]/5'
                    : 'border-gray-300 hover:border-[#f9ad03]/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                {!file ? (
                  <div className="space-y-4">
                    <div className="mx-auto h-16 w-16 bg-[#f9ad03]/10 rounded-full flex items-center justify-center">
                      <Upload className="h-8 w-8 text-[#f9ad03]" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-[#21201f]">
                        Arrastra tu currículum aquí
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        o haz clic para seleccionar un archivo
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Formatos: PDF, Word (máx. 5MB)
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-[#21201f]">{file.name}</p>
                      <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="text-sm text-[#f9ad03] hover:text-[#e89f02] underline"
                    >
                      Cambiar archivo
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={uploading || uploaded}
                className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  uploaded
                    ? 'bg-green-600 text-white'
                    : uploading
                    ? 'bg-[#f9ad03]/50 text-[#21201f] cursor-not-allowed'
                    : 'bg-[#f9ad03] text-[#21201f] hover:bg-[#e89f02] hover:shadow-lg'
                }`}
              >
                {uploading ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : uploaded ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>¡Enviado con éxito!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Postulación</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            ¿Tienes preguntas? Contáctanos al{' '}
            <a href="tel:+18095967222" className="text-[#f9ad03] font-bold hover:text-[#e89f02]">
              +1 (809) 596-7222
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;