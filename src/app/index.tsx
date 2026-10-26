import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

const DAFTAR_MENU = [
  { id: "1", nama: "Kopi Susu Catnip Cafe", harga: 20000 },
  { id: "2", nama: "Matcha Paw Latte", harga: 25000 },
  { id: "3", nama: "Croissant Ikan Tuna", harga: 18000 },
];

function OrderSummary({ totalCount }: { totalCount: number }) {
  return (
    <View style={styles.ringkasan}>
      <Text style={styles.iconKucing}>🐈‍⬛</Text>

      <Text style={styles.labelRingkasan}>YOUR ORDER</Text>

      <Text style={styles.total}>Total Item Dipesan: {totalCount}</Text>

      {totalCount >= 5 && (
        <Text style={styles.promo}>dapat diskon 10% nih, buruan checkout!</Text>
      )}
    </View>
  );
}

function MenuItem({
  nama,
  harga,
  onTambahPesanan,
}: {
  nama: string;
  harga: number;
  onTambahPesanan: () => void;
}) {
  const [qty, setQty] = useState(0);

  function tambahPesanan() {
    setQty(qty + 1);
    onTambahPesanan();
  }

  return (
    <View style={styles.kartu}>
      <View style={styles.menuHeader}>
        <Text style={styles.menuIcon}>🐈‍⬛</Text>

        <View style={styles.menuInfo}>
          <Text style={styles.nama}>{nama}</Text>

          <Text style={styles.harga}>Rp{harga.toLocaleString("id-ID")}</Text>
        </View>
      </View>

      <View style={styles.garis} />

      <Text style={styles.jumlah}>Jumlah dipesan: {qty}</Text>

      <Button title="Tambah Pesanan" onPress={tambahPesanan} color="#7656A8" />
    </View>
  );
}

export default function HomeScreen() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  function tambahTotalPesanan() {
    setTotalPesanan(totalPesanan + 1);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.isi}>
      <View style={styles.headerArea}>
        <Text style={styles.header}>KAFE KUCING</Text>

        <Text style={styles.headerKecil}>☾ C A F E ☽</Text>

        <Text style={styles.subjudul}>Where Every Sip Has a Little Magic</Text>

        <Text style={styles.kucingBesar}>🐈‍⬛</Text>
      </View>

      <OrderSummary totalCount={totalPesanan} />

      <Text style={styles.judul}>OUR MENU</Text>

      <Text style={styles.deskripsi}>Pilihan spesial dari Kafe Kucing</Text>

      {DAFTAR_MENU.map((menu) => (
        <MenuItem
          key={menu.id}
          nama={menu.nama}
          harga={menu.harga}
          onTambahPesanan={tambahTotalPesanan}
        />
      ))}

      <Text style={styles.footer}> THANK YOU FOR VISITING </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111014",
  },

  isi: {
    padding: 20,
    paddingTop: 45,
    paddingBottom: 35,
  },

  headerArea: {
    alignItems: "center",
    backgroundColor: "#1D1A24",
    padding: 25,
    borderRadius: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#514166",
  },

  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 3,
  },

  headerKecil: {
    fontSize: 19,
    color: "#B69AE0",
    marginTop: 5,
    fontWeight: "bold",
  },

  subjudul: {
    textAlign: "center",
    color: "#BDB8C7",
    marginTop: 12,
    fontSize: 12,
    fontStyle: "italic",
  },

  kucingBesar: {
    fontSize: 65,
    marginTop: 15,
  },

  ringkasan: {
    backgroundColor: "#25212E",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#7656A8",
  },

  iconKucing: {
    fontSize: 30,
    marginBottom: 5,
  },

  labelRingkasan: {
    color: "#B69AE0",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 3,
    marginBottom: 10,
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  promo: {
    color: "#C6A6FF",
    fontWeight: "bold",
    marginTop: 12,
    lineHeight: 22,
  },

  judul: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
    letterSpacing: 2,
  },

  deskripsi: {
    fontSize: 13,
    color: "#A9A3B2",
    marginBottom: 18,
  },

  kartu: {
    backgroundColor: "#211E28",
    padding: 17,
    borderRadius: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#393244",
    gap: 10,
  },

  menuHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  menuIcon: {
    fontSize: 35,
  },

  menuInfo: {
    flex: 1,
  },

  nama: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  harga: {
    fontSize: 15,
    color: "#C1A3F0",
    marginTop: 5,
    fontWeight: "bold",
  },

  garis: {
    height: 1,
    backgroundColor: "#393244",
    marginVertical: 3,
  },

  jumlah: {
    marginBottom: 5,
    color: "#C4BECC",
    fontSize: 14,
  },

  footer: {
    textAlign: "center",
    color: "#A78BCF",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 15,
    letterSpacing: 2,
  },
});
