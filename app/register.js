// app/register.js
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Tambahan state Phone
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Tambahan state Confirm Pass

  const handleRegister = () => {
    // 1. Validasi Empty Field
    if (!name || !email || !phone || !password || !confirmPassword) {
      return Alert.alert("Eh, bestie! 🫣", "Isi semua datanya dulu dong.");
    }

    // 2. Security Logic: Validasi Email (RegEx)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      return Alert.alert("Hmm... 🤔", "Format email-nya kayaknya typo deh.");
    }

    // 3. Security Logic: Validasi Phone (Cuma angka & min. 10 digit)
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone) || phone.length < 10) {
      return Alert.alert(
        "Invalid Phone! 📱",
        "Nomor HP harus angka dan minimal 10 digit ya.",
      );
    }

    // 4. Security Logic: Match Check (Password & Confirm)
    if (password !== confirmPassword) {
      return Alert.alert(
        "Gak Match! ❌",
        "Password dan Confirm Password lo harus sama, bestie.",
      );
    }

    // 5. Minimal Karakter Password (Optional but good practice)
    if (password.length < 6) {
      return Alert.alert("No cap! 🔒", "Password minimal 6 karakter ya.");
    }

    Alert.alert("Yeay! 🎉", "Akun lo berhasil dibuat, slay!");
    router.replace({ pathname: "/home", params: { userName: name } });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      // Security Logic: Handle Keyboard agar tidak nutupin tombol
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <StatusBar barStyle="light-content" backgroundColor="#0f1923" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.emoji}>🚀</Text>
            <Text style={styles.title}>Buat Akun Baru</Text>
            <Text style={styles.subtitle}>Join the vibe, bestie! ✌️</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.steps}>
              {[1, 2, 3].map((s) => (
                <View
                  key={s}
                  style={[styles.step, s === 1 && styles.stepActive]}
                />
              ))}
            </View>

            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              placeholder="Siapa nama lo?"
              placeholderTextColor="#6ee7f7"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>Email Aktif</Text>
            <TextInput
              style={styles.input}
              placeholder="your@email.com"
              placeholderTextColor="#6ee7f7"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* TAMBAHAN: Input Nomor HP */}
            <Text style={styles.label}>Nomor HP</Text>
            <TextInput
              style={styles.input}
              placeholder="0812xxxx"
              placeholderTextColor="#6ee7f7"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Min. 6 karakter"
              placeholderTextColor="#6ee7f7"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            {/* TAMBAHAN: Confirm Password */}
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Ulangi password"
              placeholderTextColor="#6ee7f7"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.btnRegister}
              onPress={handleRegister}
              activeOpacity={0.85}
            >
              <Text style={styles.btnText}>Daftar Sekarang ✨</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => router.replace("/")}
              activeOpacity={0.75}
            >
              <Text style={styles.btnLoginText}>
                Udah punya akun? Login aja 👈
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>No cap, its free! 💸</Text>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1923",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  emoji: {
    fontSize: 56,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#ffffff",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: "#67e8f9",
    marginTop: 6,
  },
  card: {
    backgroundColor: "#162433",
    borderRadius: 24,
    padding: 28,
    borderWidth: 1,
    borderColor: "#0e7490",
    shadowColor: "#06b6d4",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 12,
  },
  steps: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 24,
  },
  step: {
    width: 28,
    height: 5,
    borderRadius: 99,
    backgroundColor: "#164e63",
  },
  stepActive: {
    backgroundColor: "#06b6d4",
    width: 48,
  },
  label: {
    color: "#a5f3fc",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#0f1923",
    borderWidth: 1.5,
    borderColor: "#0e7490",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
    color: "#ffffff",
    fontSize: 15,
    marginBottom: 20,
  },
  btnRegister: {
    backgroundColor: "#06b6d4",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 4,
    shadowColor: "#06b6d4",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  btnText: {
    color: "#0f1923",
    fontWeight: "800",
    fontSize: 16,
    letterSpacing: 0.3,
  },
  btnLogin: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: "#0e7490",
  },
  btnLoginText: {
    color: "#67e8f9",
    fontWeight: "700",
    fontSize: 14,
  },
  footer: {
    textAlign: "center",
    color: "#155e75",
    marginTop: 32,
    fontSize: 13,
  },
});
