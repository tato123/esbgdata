#!/bin/bash

sh ../kafka_2.11-0.9.0.0/bin/zookeeper-server-start.sh ../kafka_2.11-0.9.0.0/config/zookeeper.properties 
sh ../kafka_2.11-0.9.0.0/bin/kafka-server-start.sh ../kafka_2.11-0.9.0.0/config/server.properties
sh ../kafka_2.11-0.9.0.0/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test