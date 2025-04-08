import Parse from 'parse/react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, Checkbox, Text, TextInput } from 'react-native-paper';
import 'react-native-get-random-values';

Parse.setAsyncStorage(require('@react-native-async-storage/async-storage').default);
Parse.initialize('PV7zqDnhac9oMzEjnTLcNuqnmofXcacoklGRxDWj', '99rmxDZfRbAvVtHXrbJb17X3Cbvp05MO8Uqz2qhg');
Parse.serverURL = 'https://parseapi.back4app.com/';

class Tarefa extends Parse.Object {
  constructor() {
    super('Tarefa');
  }

  get descricao(): string {
    return this.get('descricao');
  }

  set descricao(value: string) {
    this.set('descricao', value);
  }

  get concluida(): boolean {
    return this.get('concluida');
  }

  set concluida(value: boolean) {
    this.set('concluida', value);
  }
}

Parse.Object.registerSubclass('Tarefa', Tarefa);

export default function App() {
  const [descricao, setDescricao] = useState('');
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const buscarTarefas = async () => {
    try {
      const query = new Parse.Query(Tarefa);
      const results = await query.find();
      setTarefas(results);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const adicionarTarefa = async () => {
    if (!descricao.trim()) return;

    try {
      const novaTarefa = new Tarefa();
      novaTarefa.descricao = descricao;
      novaTarefa.concluida = false;
      await novaTarefa.save();

      alert('Tarefa adicionada!');
      setDescricao('');
      buscarTarefas();
    } catch (error: any) {
      console.error('Erro ao adicionar tarefa:', error);
      alert(`Erro ao adicionar tarefa:\n${error.message || error.code || JSON.stringify(error)}`);
    }
  };

  const alternarConcluida = async (tarefa: Tarefa) => {
    try {
      tarefa.concluida = !tarefa.concluida;
      await tarefa.save();
      buscarTarefas();
    } catch (error) {
      console.error('Erro ao alternar status:', error);
    }
  };

  const excluirTarefa = async (tarefa: Tarefa) => {
    try {
      await tarefa.destroy();
      buscarTarefas();
    } catch (error: any) {
      alert(`Erro ao excluir:\n${error.message || error.code}`);
    }
  };

  useEffect(() => {
    buscarTarefas();
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Minhas Tarefas</Text>
      <TextInput
        label="Nova Tarefa"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />
      <Button mode="contained" onPress={adicionarTarefa} style={styles.botao}>
        Adicionar
      </Button>

      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Checkbox
                status={item.concluida ? 'checked' : 'unchecked'}
                onPress={() => alternarConcluida(item)}
              />
              <Text style={[styles.descricao, item.concluida && styles.concluida]}>
                {item.descricao}
              </Text>
              <Button onPress={() => excluirTarefa(item)} compact>
                🗑️
              </Button>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: '#f4f4f4',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  botao: {
    marginBottom: 20,
  },
  card: {
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descricao: {
    flex: 1,
    fontSize: 16,
  },
  concluida: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
