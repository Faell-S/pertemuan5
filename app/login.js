// app/login.js
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@mail.com" && password === "123456") {
      router.replace("/home");
    } else {
      Alert.alert("Duh! 😬", "Email atau password lo salah, bestie!");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" backgroundColor="#1a0533" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.emoji}>🔐</Text>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Glad you are back, bestie ✨</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="your@email.com"
            placeholderTextColor="#a78bfa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#a78bfa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={handleLogin}
            activeOpacity={0.85}
          >
            <Text style={styles.btnText}>Lets Go! 🚀</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <Link href="/register" asChild>
            <TouchableOpacity style={styles.btnRegister} activeOpacity={0.75}>
              <Text style={styles.btnRegisterText}>
                Belum punya akun? Daftar disini! 👀
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text style={styles.footer}>Made with 💜 for GenZ</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a0533",
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
    color: "#c4b5fd",
    marginTop: 6,
  },
  card: {
    backgroundColor: "#2d1b4e",
    borderRadius: 24,
    padding: 28,
    borderWidth: 1,
    borderColor: "#4c1d95",
    shadowColor: "#7c3aed",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
  },
  label: {
    color: "#ddd6fe",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#1a0533",
    borderWidth: 1.5,
    borderColor: "#5b21b6",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
    color: "#ffffff",
    fontSize: 15,
    marginBottom: 20,
  },
  btnLogin: {
    backgroundColor: "#7c3aed",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 4,
    shadowColor: "#7c3aed",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 16,
    letterSpacing: 0.3,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#4c1d95",
  },
  dividerText: {
    color: "#a78bfa",
    marginHorizontal: 12,
    fontSize: 13,
  },
  btnRegister: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#7c3aed",
  },
  btnRegisterText: {
    color: "#c4b5fd",
    fontWeight: "700",
    fontSize: 14,
  },
  footer: {
    textAlign: "center",
    color: "#6d28d9",
    marginTop: 32,
    fontSize: 13,
  },
});
