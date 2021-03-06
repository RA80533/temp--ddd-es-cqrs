import { AggregateIdentifier } from './AggregateIdentifier';
import { CommandMetadata } from './CommandMetadata';
import { ContextIdentifier } from './ContextIdentifier';
import { v4 as uuid } from 'uuid';

class Command<TCommandData> {
  public readonly contextIdentifier: ContextIdentifier;

  public readonly aggregateIdentifier: AggregateIdentifier;

  public readonly name: string;

  public readonly id: string;

  public readonly data: TCommandData;

  public readonly metadata: CommandMetadata;

  public constructor ({
    contextIdentifier,
    aggregateIdentifier,
    name,
    data,
    metadata
  }: {
    contextIdentifier: ContextIdentifier;
    aggregateIdentifier: AggregateIdentifier;
    name: string;
    data: TCommandData;
    metadata: CommandMetadata;
  }) {
    this.contextIdentifier = contextIdentifier;
    this.aggregateIdentifier = aggregateIdentifier;
    this.name = name;
    this.id = uuid();
    this.data = data;
    this.metadata = metadata;
  }
}

export { Command };
