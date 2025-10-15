export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      alerts: {
        Row: {
          company_id: string | null
          created_at: string
          id: string
          is_global: boolean
          is_read: boolean
          message: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          id?: string
          is_global?: boolean
          is_read?: boolean
          message: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          id?: string
          is_global?: boolean
          is_read?: boolean
          message?: string
        }
        Relationships: [
          {
            foreignKeyName: "alerts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      available_devices: {
        Row: {
          brand: string
          created_at: string
          id: string
          imei: string
          is_available: boolean
          model: string
        }
        Insert: {
          brand: string
          created_at?: string
          id?: string
          imei: string
          is_available?: boolean
          model: string
        }
        Update: {
          brand?: string
          created_at?: string
          id?: string
          imei?: string
          is_available?: boolean
          model?: string
        }
        Relationships: []
      }
      client_documents: {
        Row: {
          created_at: string
          customer_id: string
          document_name: string
          document_type: string
          document_url: string
          file_size: number | null
          id: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          document_name: string
          document_type: string
          document_url: string
          file_size?: number | null
          id?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          document_name?: string
          document_type?: string
          document_url?: string
          file_size?: number | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_documents_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      client_notes: {
        Row: {
          client_id: string
          created_at: string
          id: string
          note: string
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: string
          note: string
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: string
          note?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_notes_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_reports: {
        Row: {
          client_id: string
          content: string
          created_at: string
          id: string
          title: string
        }
        Insert: {
          client_id: string
          content: string
          created_at?: string
          id?: string
          title: string
        }
        Update: {
          client_id?: string
          content?: string
          created_at?: string
          id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_reports_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          ano: number
          apellido: string
          cedula: string
          client_type: Database["public"]["Enums"]["client_type"]
          company_id: string | null
          created_at: string
          id: string
          imei: string
          installer: Database["public"]["Enums"]["installer_type"]
          map_location_url: string | null
          marca: string
          modelo: string
          nombre: string
          plate_number: string | null
          updated_at: string
        }
        Insert: {
          ano: number
          apellido: string
          cedula: string
          client_type?: Database["public"]["Enums"]["client_type"]
          company_id?: string | null
          created_at?: string
          id?: string
          imei: string
          installer?: Database["public"]["Enums"]["installer_type"]
          map_location_url?: string | null
          marca: string
          modelo: string
          nombre: string
          plate_number?: string | null
          updated_at?: string
        }
        Update: {
          ano?: number
          apellido?: string
          cedula?: string
          client_type?: Database["public"]["Enums"]["client_type"]
          company_id?: string | null
          created_at?: string
          id?: string
          imei?: string
          installer?: Database["public"]["Enums"]["installer_type"]
          map_location_url?: string | null
          marca?: string
          modelo?: string
          nombre?: string
          plate_number?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "clients_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          created_at: string
          id: string
          name: string
          password_hash: string
          profile_image_url: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          password_hash: string
          profile_image_url?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          password_hash?: string
          profile_image_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      company_users: {
        Row: {
          company_id: string
          created_at: string
          email: string
          id: string
          password_hash: string
        }
        Insert: {
          company_id: string
          created_at?: string
          email: string
          id?: string
          password_hash: string
        }
        Update: {
          company_id?: string
          created_at?: string
          email?: string
          id?: string
          password_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_users_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          apellido: string
          cedula: string
          created_at: string | null
          direccion: string | null
          email: string | null
          empresa: string | null
          id: string
          nombre: string
          ruc: string | null
          service_plan_id: string | null
          telefono: string | null
          tipo_cliente: string | null
          updated_at: string | null
        }
        Insert: {
          apellido: string
          cedula: string
          created_at?: string | null
          direccion?: string | null
          email?: string | null
          empresa?: string | null
          id?: string
          nombre: string
          ruc?: string | null
          service_plan_id?: string | null
          telefono?: string | null
          tipo_cliente?: string | null
          updated_at?: string | null
        }
        Update: {
          apellido?: string
          cedula?: string
          created_at?: string | null
          direccion?: string | null
          email?: string | null
          empresa?: string | null
          id?: string
          nombre?: string
          ruc?: string | null
          service_plan_id?: string | null
          telefono?: string | null
          tipo_cliente?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_service_plan_id_fkey"
            columns: ["service_plan_id"]
            isOneToOne: false
            referencedRelation: "service_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      deletion_logs: {
        Row: {
          client_id: string
          client_name: string
          deleted_at: string
          id: string
          reason: string
        }
        Insert: {
          client_id: string
          client_name: string
          deleted_at?: string
          id?: string
          reason: string
        }
        Update: {
          client_id?: string
          client_name?: string
          deleted_at?: string
          id?: string
          reason?: string
        }
        Relationships: []
      }
      expiration_notifications: {
        Row: {
          created_at: string | null
          customer_id: string | null
          gps_device_id: string | null
          id: string
          is_sent: boolean | null
          notification_date: string
          notification_type: string
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          gps_device_id?: string | null
          id?: string
          is_sent?: boolean | null
          notification_date: string
          notification_type: string
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          gps_device_id?: string | null
          id?: string
          is_sent?: boolean | null
          notification_date?: string
          notification_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "expiration_notifications_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expiration_notifications_gps_device_id_fkey"
            columns: ["gps_device_id"]
            isOneToOne: false
            referencedRelation: "gps_devices"
            referencedColumns: ["id"]
          },
        ]
      }
      gps_devices: {
        Row: {
          available_device_id: string | null
          created_at: string | null
          customer_id: string | null
          id: string
          imei: string
          installation_date: string
          installation_document_url: string | null
          is_active: boolean | null
          service_end_date: string
          service_plan_id: string | null
          service_start_date: string
          updated_at: string | null
          vehicle_id: string | null
        }
        Insert: {
          available_device_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          imei: string
          installation_date: string
          installation_document_url?: string | null
          is_active?: boolean | null
          service_end_date: string
          service_plan_id?: string | null
          service_start_date: string
          updated_at?: string | null
          vehicle_id?: string | null
        }
        Update: {
          available_device_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          imei?: string
          installation_date?: string
          installation_document_url?: string | null
          is_active?: boolean | null
          service_end_date?: string
          service_plan_id?: string | null
          service_start_date?: string
          updated_at?: string | null
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gps_devices_available_device_id_fkey"
            columns: ["available_device_id"]
            isOneToOne: false
            referencedRelation: "available_devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gps_devices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gps_devices_service_plan_id_fkey"
            columns: ["service_plan_id"]
            isOneToOne: false
            referencedRelation: "service_plans_available"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gps_devices_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      installers: {
        Row: {
          created_at: string
          email: string | null
          id: string
          is_active: boolean
          name: string
          phone: string | null
          photo_url: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name: string
          phone?: string | null
          photo_url?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name?: string
          phone?: string | null
          photo_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          customer_id: string | null
          id: string
          notes: string | null
          payment_date: string
          payment_method: string | null
          service_period_end: string
          service_period_start: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          customer_id?: string | null
          id?: string
          notes?: string | null
          payment_date: string
          payment_method?: string | null
          service_period_end: string
          service_period_start: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          customer_id?: string | null
          id?: string
          notes?: string | null
          payment_date?: string
          payment_method?: string | null
          service_period_end?: string
          service_period_start?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      ratings: {
        Row: {
          comments: string | null
          created_at: string
          customer_name: string
          customer_phone: string | null
          id: string
          installation_rating: number
          installer_id: string | null
          rating_date: string
          service_rating: number
        }
        Insert: {
          comments?: string | null
          created_at?: string
          customer_name: string
          customer_phone?: string | null
          id?: string
          installation_rating: number
          installer_id?: string | null
          rating_date?: string
          service_rating: number
        }
        Update: {
          comments?: string | null
          created_at?: string
          customer_name?: string
          customer_phone?: string | null
          id?: string
          installation_rating?: number
          installer_id?: string | null
          rating_date?: string
          service_rating?: number
        }
        Relationships: [
          {
            foreignKeyName: "ratings_installer_id_fkey"
            columns: ["installer_id"]
            isOneToOne: false
            referencedRelation: "installers"
            referencedColumns: ["id"]
          },
        ]
      }
      service_plans: {
        Row: {
          created_at: string | null
          description: string | null
          duration_months: number
          features: Json | null
          id: string
          is_active: boolean | null
          name: string
          price: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_months?: number
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          price: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_months?: number
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      service_plans_available: {
        Row: {
          created_at: string
          description: string | null
          duration_months: number
          features: Json | null
          id: string
          is_active: boolean
          name: string
          price: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_months: number
          features?: Json | null
          id?: string
          is_active?: boolean
          name: string
          price: number
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_months?: number
          features?: Json | null
          id?: string
          is_active?: boolean
          name?: string
          price?: number
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          ano: number
          chasis: string | null
          color: string | null
          combustible: string | null
          created_at: string | null
          customer_id: string | null
          id: string
          marca: string
          modelo: string
          placa: string | null
          tipo_vehiculo: string | null
          updated_at: string | null
        }
        Insert: {
          ano: number
          chasis?: string | null
          color?: string | null
          combustible?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          marca: string
          modelo: string
          placa?: string | null
          tipo_vehiculo?: string | null
          updated_at?: string | null
        }
        Update: {
          ano?: number
          chasis?: string | null
          color?: string | null
          combustible?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          marca?: string
          modelo?: string
          placa?: string | null
          tipo_vehiculo?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_expiration_notifications: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_user_company_id: {
        Args: { user_email: string }
        Returns: string
      }
      get_user_type: {
        Args: { user_email: string }
        Returns: string
      }
    }
    Enums: {
      client_type: "individual" | "company"
      installer_type: "wilkin_arias" | "daniel_arias"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      client_type: ["individual", "company"],
      installer_type: ["wilkin_arias", "daniel_arias"],
    },
  },
} as const
